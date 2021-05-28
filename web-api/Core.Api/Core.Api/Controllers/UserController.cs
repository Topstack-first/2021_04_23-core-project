using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Api.Dtos;
using Core.Api.Mapper;
using Core.DAL.Models;
using Core.DAL.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace Core.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IUserRepository _userRepository;

        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpGet("GetUsers")]
        [ProducesResponseType(200, Type = typeof(IEnumerable<UserDto>))]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        public IActionResult GetUsers()
        {
            var usersOfDepartments = _userRepository.GetUsers();
            var userDtoList = new List<UserDto>();
            foreach (var user in usersOfDepartments)
            {
                userDtoList.Add(EntityMapper.MappUser(user));
             }
            return Ok(userDtoList);
        }


    }
}