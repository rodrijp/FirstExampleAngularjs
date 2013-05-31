using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web.Helpers;
using System.Web.Http;
using System.Web.Mvc;
using MvcApplication3.Models;

namespace MvcApplication3.Controllers
{
    public class DemoController : Controller    
    {
        public JsonResult  GetMessage()
        {
            var message = new Message() {Text = "Hello World!"};
            return Json(message, JsonRequestBehavior.AllowGet);
        }


        public JsonResult GetMessageConfig()
        {
            var messageConfig = new MessageConfig() { To = "ejemplo@hostname.com", Subject = "Subject hello world"};
            return Json(messageConfig, JsonRequestBehavior.AllowGet);
        }

        public string SetMessage(Message message)
        {
            Thread.Sleep(2000);
            return "GuardaoSetMessage!";
            //Saving Message
        }

        public string SetMessageConfig(MessageConfig messageConfig)
        {
            Thread.Sleep(2000);
            return "Guardao!";
            //Saving Message
        }

    }
}
