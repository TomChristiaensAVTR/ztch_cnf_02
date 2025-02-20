using { Ticket } from '../srv/external/Ticket.cds'; 
namespace PPOrders.cnf02;

using { 
  cuid,
  Country,
  Currency,
  Language,
  sap.common.Timezones as Timezones,
  User,
  managed,
  sap.common.CodeList as CodeList, 
} from '@sap/cds/common';

entity Confirmations : cuid, managed
{
    Description : String(100);
    User : User;
    StartTime : Timestamp;
    EndTime : Timestamp;
    Plant : Association to one Plants;
}

annotate Confirmations{
   @Core.Computed
   ID;
};

entity Plants : CodeList {
   key ID : String(4); 
}