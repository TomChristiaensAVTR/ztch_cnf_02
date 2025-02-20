using { PPOrders.cnf02 as my } from '../db/schema.cds';

// This was a demo

@path : '/service/CnfSrv'
service CnfSrv
{
    annotate Confirmations with @restrict :
    [
        { grant : [ 'CREATE', 'UPDATE' ], to : [ 'ItsComplicated' ], where : 'Plant = 8041' },
        { grant : [ '*' ], to : [ 'admin' ] },
        { grant : [ 'READ' ], to : [ 'display' ] }
    ];

    annotate Plants with @restrict :
    [
        { grant : [ '*' ], to : [ 'admin' ] },
        { grant : [ 'READ' ], to : [ 'display' ] }
    ];

    @odata.draft.enabled
    entity Plants as
        projection on my.Plants;

    @odata.draft.enabled
    entity Confirmations as
        projection on my.Confirmations;
}

annotate CnfSrv with @requires :
[
    'authenticated-user',
    'admin',
    'display',
    'ItsComplicated'
];
