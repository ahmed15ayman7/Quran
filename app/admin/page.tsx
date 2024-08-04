// import { getUsers } from '@/lib/db';
import { Search } from '@/components/shared/search';
import { UsersTable } from '@/components/shared/users-table';



export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string; offset: string };
}) {
  const search = searchParams.q ?? '';
  const offset = searchParams.offset ?? 0;
  const users:any[]=[{ nameteatch:"vbnm",name:"bnbn",SSN:"vbvbn",id:'hjhklj',degree:77,typeM:'2'}]
  , newOffset  = null
  // await getUsers(search, Number(offset));

  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center mb-8">
        <h1 className="font-semibold text-lg md:text-2xl">الطلاب</h1>
      </div>
      <div className="w-full mb-4">
        <Search value={searchParams.q} />
      </div>
      <UsersTable users={users} offset={newOffset} />
    </main>
  );
}
