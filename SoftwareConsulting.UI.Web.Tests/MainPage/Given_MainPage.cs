using System.Web.Mvc;
using SoftwareConsulting.UI.Web.Controllers;

namespace SoftwareConsulting.UI.Web.Tests.MainPage
{
    public class GivenMainPage
    {
        protected HomeController Controller;

        public GivenMainPage()
        {
            Controller = new HomeController();
        }
    }
}
