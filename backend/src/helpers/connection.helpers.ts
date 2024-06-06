import mssql from 'mssql';
import { sqlConfig } from '../config/sql.config';
import { sqlConfigure } from '../config/server.config';

export default class Connection {

  executeQuery(query: string) {
    let pool = mssql.connect(sqlConfigure);
  }

}