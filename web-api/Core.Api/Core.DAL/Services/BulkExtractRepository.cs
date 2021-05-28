using Core.DAL.Contexts;
using Core.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Core.DAL.Services
{
    public class BulkExtractRepository:IBulkExtractRepository
    {
        private CoreDBContext _dbContext;

        public BulkExtractRepository(CoreDBContext context)
        {
            _dbContext = context;
        }

        public ICollection<BulkExtract> GetBulkExtracts()
        {
            return _dbContext.BulkExtract.Where(d => true).ToList();
        }
        public BulkExtract AddBulkExtract(BulkExtract bulkExtract)
        {
            _dbContext.BulkExtract.Add(bulkExtract);
            Save();
            return _dbContext.BulkExtract.OrderBy(c=>c.bulk_extract_id).LastOrDefault();
        }
        public bool Save()
        {
            var saved = _dbContext.SaveChanges();
            return saved >= 0 ? true : false;
        }
    }
}
