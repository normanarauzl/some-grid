import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GroupComponent } from '../group/group.component';
import { dataTable } from './data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  private gridApi;
  private gridColumnApi;
  public rowData: any;
  public rowGroupPanelShow;
  public columnDefs;
  public defaultColDef;
  public sideBar;
  public frameworkComponents;
  public gridOptions;

  ngOnInit() {
    this.rowData = dataTable;
  }

  constructor(private http: HttpClient) {
    this.rowGroupPanelShow = 'onlyWhenGrouping'; // onlyWhenGrouping, always
    this.columnDefs = [
      {
        field: 'athlete',
        width: 150,
        filter: 'agTextColumnFilter'
      },
      {
        field: 'age',
        width: 90
      },
      {
        field: 'country',
        width: 120
      },
      {
        field: 'year',
        width: 90
      },
      {
        field: 'date',
        width: 110
      },
      {
        field: 'gold',
        width: 100,
        suppressFilter: true
      },
      {
        field: 'silver',
        width: 100,
        suppressFilter: true
      },
      {
        field: 'bronze',
        width: 100,
        suppressFilter: true
      },
      {
        field: 'total',
        width: 100,
        suppressFilter: true
      }
    ];
    this.defaultColDef = {
      enableValue: true,
      enableRowGroup: true,
      enablePivot: true
    };

    this.sideBar = {
      toolPanels: [
        'columns',
        'filters',
        {
          id: 'groups',
          labelKey: 'groups',
          labelDefault: 'Groups',
          iconKey: 'filter',
          toolPanel: 'groupComponent'
        }
      ],
      defaultToolPanel: 'groups'
    };
    this.frameworkComponents = { groupComponent: GroupComponent };
  }

  onGridReady(event) {
    this.gridApi = event.api;
    this.gridColumnApi = event.columnApi;
    this.gridOptions = event;
  }
}
