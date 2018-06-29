namespace TimeMachine.WebAPI
{
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using Dapper;

    public class TimeTravelerRepository : Repository
    {
        public IEnumerable<TimeTraveler> GetAll()
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                return dbConnection.Query<TimeTraveler>(
                    "select TimeTravelerId, FirstName, LastName "
                    + "from timetraveler;"
                    , commandType: CommandType.Text);
            }
        }

        public TimeTraveler Get(int id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                return dbConnection.Query<TimeTraveler>(
                    "select TimeTravelerId, FirstName, LastName "
                    + "from timetraveler "
                    + "where TimeTravelerId = @TimeTravelerId;"
                    ,new {TimeTravelerId = id} ,commandType: CommandType.Text).FirstOrDefault();
            }
        }

        public void Delete(int id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                dbConnection.Execute(
                    "delete "
                    + "from timetraveler "
                    + "where TimeTravelerId = @TimeTravelerId;"
                    ,new {TimeTravelerId = id} ,commandType: CommandType.Text);
            }
        }

        public void Update(TimeTraveler timeTraveler)
        {
            System.Diagnostics.Debug.WriteLine(timeTraveler.FirstName);
            System.Diagnostics.Debug.WriteLine(timeTraveler.LastName);
            System.Diagnostics.Debug.WriteLine(timeTraveler.TimeTravelerId);
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                dbConnection.Execute(
                    "update timetraveler "
                    + "set FirstName = @FirstName, LastName = @LastName "
                    + "where TimeTravelerId = @TimeTravelerId;"
                    ,new {
                        TimeTravelerId = timeTraveler.TimeTravelerId, 
                        FirstName = timeTraveler.FirstName,
                        LastName = timeTraveler.LastName
                    } 
                    ,commandType: CommandType.Text);
            }
        }

        public void Insert(TimeTraveler timeTraveler)
        {
            System.Diagnostics.Debug.WriteLine(timeTraveler.FirstName);
            System.Diagnostics.Debug.WriteLine(timeTraveler.LastName);
            System.Diagnostics.Debug.WriteLine(timeTraveler.TimeTravelerId);            
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                dbConnection.Execute(
                    "insert into timetraveler(FirstName, LastName) "
                    + "values(@FirstName, @LastName);"
                    ,new { 
                        FirstName = timeTraveler.FirstName,
                        LastName = timeTraveler.LastName
                    } 
                    ,commandType: CommandType.Text);
            }
        }
    }
}
