// import { getUsers } from '@/lib/db';
import QuranLevelsTable from '@/components/cards/QuranLevels';
import { Search } from '@/components/shared/search';
import { UsersTable } from '@/components/shared/users-table';



export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string; offset: string };
}) {
  const search = searchParams.q ?? '';
  const offset = searchParams.offset ?? 0;

  const users:any[]=[{ nameteatch:"vbnm",name:"bnbn",SSN:"vbvbn",id:'hjhklj',degree:77,typeM:'2',level:'الأول',age:22}]
  , newOffset  = null
  // await getUsers(search, Number(offset));


  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center mb-8">
        <h1 className="font-semibold text-lg md:text-2xl">اختر المسابقة
        </h1>
      </div>
      <div className="w-full mb-4">
      <QuranLevelsTable level={users[0].level} age={users[0].age} />
      </div>
      
    </main>
  );
}
