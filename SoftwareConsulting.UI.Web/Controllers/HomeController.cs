using System.Collections.Generic;
using System.Web.Mvc;

namespace SoftwareConsulting.UI.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.SearchTerms = new List<string> {
                "Software Consulting"
            };

            return View();
        }        
    }
}