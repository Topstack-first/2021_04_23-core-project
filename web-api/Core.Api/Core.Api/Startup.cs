using Core.DAL.Contexts;
using Core.DAL.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;


namespace Core.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var connectionString = Configuration["sqlserverConnection:coreDBconnectionString"];
            services.AddDbContext<CoreDBContext>(options => options.UseSqlServer(connectionString));
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IDocumentRepository, DocumentRepository>();
            services.AddScoped<IBulkExtractRepository, BulkExtractRepository>();
            services.AddControllers().ConfigureApiBehaviorOptions(options =>
            {
                options.SuppressInferBindingSourcesForParameters = true;
                options.SuppressConsumesConstraintForFormFileParameters = true;
                
            }); ;

            services.AddControllers().AddNewtonsoftJson(options =>options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);

            // Register Swagger generator
            services.AddSwaggerDocument(configure =>
            {
                configure.Title = "Core API";
            });
            
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseCors(builder =>
            builder.AllowAnyOrigin()
             .AllowAnyHeader()
             .AllowAnyMethod()
            );

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            // Enable middleware to serve generated swagger as a JSON endpoint
            app.UseOpenApi();
            

            // specifying the Swagger JSON endpoint
            app.UseSwaggerUi3(c => {
                
                if (!env.IsDevelopment())
                {
                    c.EnableTryItOut = false;
                }
            });            
        }
    }
}
