namespace TimeMachine.WebAPI
{
    using MySql.Data.MySqlClient;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Text;

    public class TimeTraveler
    {
        public int TimeTravelerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
