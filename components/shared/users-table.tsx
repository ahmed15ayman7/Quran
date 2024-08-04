'use client';

import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
// import { SelectUser } from '@/lib/db';
import { deleteUser } from '../../lib/actions';
import { useRouter } from 'next/navigation';

export function UsersTable({
  users,
  offset
}: {
  users: any[];
  offset: number | null;
}) {
  const router = useRouter();

  function onClick() {
    router.replace(`/?offset=${offset}`);
  }

  return (
    <>
      <form className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="max-w-[150px]">اسم الطالب </TableHead>
              <TableHead className="hidden md:table-cell">الرقم القومي</TableHead>
              <TableHead className="hidden md:table-cell">الدرجه</TableHead>
              <TableHead className="hidden md:table-cell">اسم المصحح</TableHead>
              <TableHead className="hidden md:table-cell">المسابقه</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <UserRow key={user.id} user={user} />
            ))}
          </TableBody>
        </Table>
      </form>
      {offset !== null && (
        <Button
          className="mt-4 w-40"
          variant="secondary"
          onClick={() => onClick()}
        >
          Next Page
        </Button>
      )}
    </>
  );
}

function UserRow({ user }: { user: any }) {
  const userId = user.id;
  const deleteUserWithId = deleteUser.bind(null, userId);

  return (
    <TableRow>
      <TableCell className="font-medium">{user.name}</TableCell>
      <TableCell className="hidden md:table-cell">{user.SSN}</TableCell>
      <TableCell>{user.degree}</TableCell>
      <TableCell>{user.nameteatch}</TableCell>
      <TableCell>{user.typeM}</TableCell>
      <TableCell>
        <div className="flex flex-row-reverse gap-3">

        <Button
          className=""
          size="sm"
          variant="destructive"
          onClick={deleteUserWithId}
          >
          حذف
        </Button>
        <Button
          className=""
          size="sm"
          variant="success"
          onClick={deleteUserWithId}
          >
          مدرس
        </Button>
          </div>
      </TableCell>
    </TableRow>
  );
}
