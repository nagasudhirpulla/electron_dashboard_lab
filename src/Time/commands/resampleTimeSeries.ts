import { ITimePeriod } from "../type_defs/ITimePeriod";
import { ResamplingStrategy } from "../../measurements/ResamplingStrategy";
import { TimePeriod } from "../TimePeriod";
/**
assumptions
input timeseries is in the format [timestamp1, value1, timestamp2, value2, ...]
timestamp is a number that represents duration from UNIX epoch in milliseconds, for example (new Date()).getTime()
 */
export const resampleTimeSeries = (ts: number[], resamplePeriod: ITimePeriod, strategy: ResamplingStrategy): number[] => {
    if (strategy == ResamplingStrategy.Raw || TimePeriod.getSeconds(resamplePeriod) == 0 || ts.length < 2) {
        return ts
    }
    const resultTimeSeries = []

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