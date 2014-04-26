using System.Web.Mvc;

namespace SoftwareConsulting.UI.Web.Tests.MainPage.SearchEngineOptimization
{
    public class GivenMainPageWhenDisplayed : GivenMainPage
    {
        protected ViewResult Page;

        public GivenMainPageWhenDisplayed()
        {
            Page = (ViewResult) Controller.Index();
        }
    }
}
