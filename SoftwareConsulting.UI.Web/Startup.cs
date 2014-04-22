using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SoftwareConsulting.UI.Web.Startup))]
namespace SoftwareConsulting.UI.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
