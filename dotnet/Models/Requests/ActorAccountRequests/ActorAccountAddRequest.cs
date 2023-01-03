
using Sabio.Models.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;

namespace Sabio.Models.Requests.ActorAccountRequests
{
    public class ActorAccountAddRequest
    {
        [Required]
        [StringLength(30,MinimumLength =6)]
        public string UserName { get; set; }
        [Required]
        [StringLength(30, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }
        [Required,Url]
        public string AvatarUrl { get; set; }
        [Required, Range(1, Int32.MaxValue)]
        public int ZoneId{ get; set; }
        [Required, Range(1, Int32.MaxValue)]
        public int ActorId { get; set; }
        [Required, Range(1, Int32.MaxValue)]
        public int AccountStatusId  { get; set; }
   
    }
}
