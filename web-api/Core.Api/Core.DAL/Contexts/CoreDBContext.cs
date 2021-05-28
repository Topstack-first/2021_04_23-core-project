using Core.DAL.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;

namespace Core.DAL.Contexts
{
    public class CoreDBContext : DbContext
    {
        public CoreDBContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<User> User { get; set; }
        public DbSet<Document> Document { get; set; }
        public DbSet<BulkExtract> BulkExtract { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            /*
             * One to one relation between Activity and course
             */
            //modelBuilder.Entity<Activity>().HasOne(a => a.Course)
            //   .WithOne(a => a.Activity)
            //   .HasForeignKey<Activity>("idcourse");

        }
    }
}
