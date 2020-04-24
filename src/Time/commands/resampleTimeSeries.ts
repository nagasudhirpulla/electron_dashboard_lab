import { ITimePeriod } from "../type_defs/ITimePeriod";
import { ResamplingStrategy } from "../../measurements/ResamplingStrategy";
import { TimePeriod } from "../TimePeriod";
/**
assumptions - input timeseries is already sorted

let prevIterationEndTimestampIndex(pieti) = 0
let prevResult (prevRes) = 1st sample in input timeseries
let resultSampleTimestamp (rst) = 1st sample timestamp

while rst<= last timestamp of input timeseries
- next_rst = rst + resample period
- using pieti, find input samples between [rst, next_rst) and apply resampling logic
- if n(samples) > 0, update pieti
- else take result as prev result
- rst = next_rst
 */
export const resampleTimeSeries = (ts: number[], resamplePeriod: ITimePeriod, strategy: ResamplingStrategy): number[] => {
    if (strategy == ResamplingStrategy.Raw || TimePeriod.getSeconds(resamplePeriod) == 0 || ts.length < 2) {
        return ts
    }
    const resultTimeSeries = []
    const lastTimestampOfInp = ts[ts.length - 2]

    let currBucketSamplIndex = 0
    let currResTimestamp = ts[0]
    let prevBucketResult = ts[1]
    while (currBucketSamplIndex <= ts.length - 2) {
        const nextResTimestamp = (TimePeriod.addTimePeriod(new Date(currResTimestamp), resamplePeriod)).getTime()

        // bucket fill and processing start
        let currRes: number = null
        let numBucketSamples = 0
        let abortBucketFill = false
        while (!abortBucketFill) {
            if ((currBucketSamplIndex > ts.length - 2) || ts[currBucketSamplIndex] >= nextResTimestamp) {
                abortBucketFill = true
                continue
            }
            numBucketSamples += 1
            if (currRes == null) {
                // snap strategy is covered here
                currRes = ts[currBucketSamplIndex + 1]
            }
            else {
                if (strategy == ResamplingStrategy.Max) {
                    if (ts[currBucketSamplIndex + 1] > currRes) {
                        currRes = ts[currBucketSamplIndex + 1]
                    }
                }
                else if (strategy == ResamplingStrategy.Min) {
                    if (ts[currBucketSamplIndex + 1] < currRes) {
                        currRes = ts[currBucketSamplIndex + 1]
                    }
                }
                else if (strategy == ResamplingStrategy.Average) {
                    currRes += ts[currBucketSamplIndex + 1]
                }
            }
            currBucketSamplIndex += 2
        }
        if (strategy == ResamplingStrategy.Average && numBucketSamples > 0) {
            currRes = currRes / numBucketSamples
        }
        // bucket fill and processing end

        // update for next iteration and update currRes in case of no samples in bucket
        if (numBucketSamples > 0) {
            prevBucketResult = currRes
        }
        else {
            currRes = prevBucketResult
        }

        //update result timeseries
        resultTimeSeries.push(currResTimestamp)
        resultTimeSeries.push(currRes)

        // update for next iteration
        currResTimestamp = nextResTimestamp
    }

    return resultTimeSeries
}