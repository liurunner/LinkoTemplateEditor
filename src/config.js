export default {
    mergeFields: [
        {
            group: "Common",
            path: "",
            fields: [
                { name: "AuthorityId",                      type: "int" },
                { name: "AuthorityName",                    type: "text" },
                { name: "LoggedInUserFullName",             type: "text" },
                { name: "LoggedInUserTitle",                type: "text" },
                { name: "LoggedInUserPhoneNumber",          type: "text" },
                { name: "LoggedInUserPhoneNumber",          type: "text" }
            ]
        },
        {
            group: "Facility",
            path: "Facility",
            fields: [
                { name: "FacilityId",               type: "int" },
                { name: "FacilityNumber",           type: "text" },
                { name: "SiteId",                   type: "int" },
                { name: "SiteNumber",               type: "text" },
                { name: "OrganizationAlias",        type: "text" },
                { name: "AccountNumber",            type: "text" },
                { name: "MeterNumber",              type: "text" },
                { name: "SewerNumber",              type: "text" },
                { name: "IsPermitted",              type: "text" },
                { name: "HaulerId",                 type: "text" },
                { name: "HaulerNumber",             type: "text" },
                { name: "HaulerName",               type: "text" },
                { name: "HaulerEmail",              type: "text" },
                { name: "AnnualFee",                type: "text" },
                { name: "MohthlyFee",               type: "text" },
                { name: "EffectiveDateUtc",         type: "text" },
                { name: "ApplicationDateUtc",       type: "text" },
                { name: "DailyFlow",                type: "text" },
                { name: "Address",                  type: "text" },
                { name: "MapCategory",              type: "text" },
                { name: "Latitude",                 type: "text" },
                { name: "Longitude",                type: "text" },
                { name: "ReceivingPlant",           type: "text" },
                { name: "TrunkLine",                type: "text" },
                { name: "SiteElevation",            type: "text" }
            ]
        },
        {
            group: "Inspection",
            path: "Inspection",
            fields: [
                { name: "InspectionCompleteDate",   type: "text" },
                { name: "InspectionEventType",      type: "enum",   apiPath: "/" }
            ]
        }
    ]
}
