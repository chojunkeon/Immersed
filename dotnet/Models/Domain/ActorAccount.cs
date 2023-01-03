
using Sabio.Models.Domain.Actors;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sabio.Models.Domain
{
    public class ActorAccount
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string AvatarUrl { get; set; }
        public LookUp Zone { get; set; }
        public LookUp ZoneStatus { get; set; }
        public Actor Actor { get; set; }
        public LookUp AccountStatus { get; set; }
        public User CreatedBy { get; set; }
        public User ModifiedBy { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }
    }
}
