export default {
    mergeFields: [{
        group: "Facility",
        fields: [
            { name: "FacilityNumber",           type: "text" },
            { name: "Address",                  type: "text" },
            { name: "MapCategory",              type: "text" },
            { name: "Latitude",                 type: "text" },
            { name: "Longitude",                type: "text" },
            { name: "ReceivingPlant",           type: "text" },
            { name: "TrunkLine",                type: "text" },
            { name: "SiteElevation",            type: "text" }
        ]
    } , {
        group: "Inspection",
        fields: [
            { name: "InspectionCompleteDate",   type: "text" },
            { name: "InspectionEventType",      type: "enum",   apiPath: "/" }
        ]
    }]
}
