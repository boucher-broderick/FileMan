using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MySql.Data.MySqlClient;
using FileManAPI.Models;
using System.Data.SqlClient;

namespace FileManAPI.Controllers
{
    public class testController : ApiController
    {

        public HttpResponseMessage GET()
        {
            string con = System.Configuration.ConfigurationManager.ConnectionStrings["MySqlConnectionString"].ConnectionString;
            String strSQL = "SELECT * FROM test;";

            MySqlDataAdapter myDataAdapter = new MySqlDataAdapter(strSQL, con);

            DataTable myDataSet = new DataTable();
            myDataAdapter.Fill(myDataSet);

            return Request.CreateResponse(HttpStatusCode.OK, myDataSet);
            //commefnt test
        }

        public string POST(test t)
        {
            try
            {
                string con = System.Configuration.ConfigurationManager.ConnectionStrings["MySqlConnectionString"].ConnectionString;
                String strSQL = "INSERT INTO test (TestID, TestCol)  VALUES (2,'world')";

                MySqlDataAdapter myDataAdapter = new MySqlDataAdapter(strSQL, con);

                DataTable myDataSet = new DataTable();
                myDataAdapter.Fill(myDataSet);

                return "Success";
            }
            catch
            {
                return "Fail";
            }
        }

        public string PUT(test t)
        {
            try
            {
                string con = System.Configuration.ConfigurationManager.ConnectionStrings["MySqlConnectionString"].ConnectionString;
                String strSQL = "UPDATE test SET TestCol= 'wworld' WHERE TestID = 2";

                MySqlDataAdapter myDataAdapter = new MySqlDataAdapter(strSQL, con);

                DataTable myDataSet = new DataTable();
                myDataAdapter.Fill(myDataSet);

                return "Success";
            }
            catch
            {
                return "Fail";
            }
        }

 
    }
}
