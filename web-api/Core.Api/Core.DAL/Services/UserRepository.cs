using Core.DAL.Contexts;
using Core.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Core.DAL.Services
{
	public class UserRepository : IUserRepository
	{
		private CoreDBContext _dbContext;

		public UserRepository(CoreDBContext context)
		{
			_dbContext = context;
		}

		public ICollection<User> GetUsers()
		{
			return _dbContext.User.Select(
				user => new User
				{
					user_id = user.user_id,
					username = user.username,
					password = user.password,
					first_name = user.first_name,
					last_name = user.last_name,
					role_id = user.role_id,
				}
				).ToList();
		}
	}
}
