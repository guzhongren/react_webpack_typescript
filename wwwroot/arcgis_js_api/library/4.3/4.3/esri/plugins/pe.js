/**
 * This is a loader plugin that loads the esri/geometry/support/pe module and returns it when it's been initialized.
 * This is used by esri/geometry/pe.
 */
define(["require", "exports", "../geometry/support/pe"], function (require, exports, pe) {
    function load(id, parentRequire, callback) {
        pe.onRuntimeInitialized = function () {
            callback(pe);
        };
    }
    exports.load = load;
});
