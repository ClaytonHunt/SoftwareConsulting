using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace SoftwareConsulting.UI.Web.Tests.MainPage.SearchEngineOptimization
{
    [TestClass]
    public class GivenMainPageWhenDisplayedThenSearchTerms : GivenMainPageWhenDisplayed
    {
        [TestMethod]
        public void SearchTermsContainSoftwareConsulting()
        {
            Assert.IsTrue(Page.ViewBag.SearchTerms.Contains("Software Consulting"));
        }
    }
}
