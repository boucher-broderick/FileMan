﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MySql.Data.MySqlClient;

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
        }
    }
}
