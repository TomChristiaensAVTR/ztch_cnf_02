using CnfSrv as service from '../../srv/service';
annotate service.Confirmations with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'Description',
                Value : Description,
            },
            {
                $Type : 'UI.DataField',
                Value : User,
            },
            {
                $Type : 'UI.DataField',
                Label : 'StartTime',
                Value : StartTime,
            },
            {
                $Type : 'UI.DataField',
                Label : 'EndTime',
                Value : EndTime,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Plant_ID',
                Value : Plant_ID,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Administrative Data',
            ID : 'AdministrativeData',
            Target : '@UI.FieldGroup#AdministrativeData',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'Description',
            Value : Description,
        },
        {
            $Type : 'UI.DataField',
            Value : User,
        },
        {
            $Type : 'UI.DataField',
            Label : 'StartTime',
            Value : StartTime,
        },
        {
            $Type : 'UI.DataField',
            Label : 'EndTime',
            Value : EndTime,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Plant_ID',
            Value : Plant_ID,
        },
        {
            $Type : 'UI.DataField',
            Value : createdBy,
        },
        {
            $Type : 'UI.DataField',
            Value : createdAt,
        },
        {
            $Type : 'UI.DataField',
            Value : modifiedBy,
        },
        {
            $Type : 'UI.DataField',
            Value : modifiedAt,
        },
    ],
    UI.FieldGroup #AdministrativeData : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : modifiedBy,
            },
            {
                $Type : 'UI.DataField',
                Value : modifiedAt,
            },
            {
                $Type : 'UI.DataField',
                Value : createdBy,
            },
            {
                $Type : 'UI.DataField',
                Value : createdAt,
            },
        ],
    },
);

