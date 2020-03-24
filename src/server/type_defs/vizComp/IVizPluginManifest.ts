export interface IVizPluginManifest {
    /**
     * componentPath - path of the js file to eval that registers the component, js file should call a $Comps.registerComp() method
     */
    componentPath: string;
}
