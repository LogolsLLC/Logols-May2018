using System;
using System.Collections.Generic;

namespace TimeMachine
{
    public class TimeMachine
    {
        public List<int> TravelHistory {get; set;}
        public string Name {get; set;}

        public TimeMachine()
        {
            TravelHistory = new List<int>();
            Console.WriteLine("The time machine has been created.");
        }

        public void TimeTravel(int year)
        {
            Console.WriteLine($"You are traveling to {year}");
            System.Threading.Thread.Sleep(1000);
            Console.WriteLine("You have arrived");
            TravelHistory.Add(year);
        }
    }
}