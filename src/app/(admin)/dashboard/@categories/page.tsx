// import React from 'react';
// // import Header from '@/app/components/header';

// export interface PageProps {}

// export default function Page({}: PageProps) {
//   return (
//     <>
//       <div>Categories chunk inside Dashboard</div>
//     </>
//   );
// }

import React from 'react';
import { getCategories, getCompanies } from '@/lib/api';
import getCountById from '@/lib/utils/getCountById';
import StatCard, { StatCardType } from '@/app/components/stat-card';
import DashboardCard from '@/app/components/dashboard-card';

export interface PageProps {}

export default async function Page({}: PageProps) {
  const categories = await getCategories();
  //   const companies = await getCompanies();
  console.log(categories);
  //   const categories = [
  //     { title: 'title 1', id: '1' },
  //     { title: 'title 2', id: '2' },
  //     { title: 'title 3', id: '3' },
  //     { title: 'title 4', id: '4' },
  //     { title: 'title 5', id: '5' },
  //     { title: 'title 6', id: '6' },
  //     { title: 'title 7', id: '7' },
  //     { title: 'title 8', id: '8' },
  //   ];
  //   const counts = getCountById(companies, 'categoryId');

  return (
    <DashboardCard label="Categories of companies">
      <div className="grid grid-cols-12 gap-3 pb-5 px-5">
        {categories.map(({ id, title }) => (
          <div key={id} className="col-span-3">
            <StatCard type={StatCardType.Dark} label={title} counter={0} />
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
