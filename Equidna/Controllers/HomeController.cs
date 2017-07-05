using System.Web.Mvc;

namespace Equidna.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Linear()
        {
           // ViewBag.Imagen = Server.MapPath("~") + @"Content\images\frente.png";
         
            return View();
        }

        public ActionResult Quadratic()
        {
            return View();
        }

        public ActionResult Cubic()
        {
            return View();
        }
    }
}