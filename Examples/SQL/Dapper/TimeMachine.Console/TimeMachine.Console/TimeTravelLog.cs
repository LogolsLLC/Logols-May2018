using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace TimeMachine.CommandLine
{
    public class TimeTravelLog
    {
        public int TimeTravelLogId { get; set; }
        public int TravelToYear { get; set; }
        public DateTime TravelDate { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
