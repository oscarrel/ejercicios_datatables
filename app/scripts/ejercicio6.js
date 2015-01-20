'use strict';
$(document).ready(function() {
    $('#miTabla').dataTable( {
        /*'paging':   false,
        'filter': false,*/
        'order': [[ 0, 'asc' ]],
         'columnDefs': [
            {
                'targets': [ 2 ],
                'visible': false,
            },{
                'targets': [ 3 ],
                'visible': false,
                'searchable': false
            }],
                stateSave: true,
                'language':{
                    'url':'scripts/datatables.spanish.lang'
                }
        } );
    } );