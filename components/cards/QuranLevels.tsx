'use client'
import React,{FormEvent, useState} from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Button } from '@/components/ui/button';
import { SelectLevel } from '@/lib/actions';
import { usePathname } from 'next/navigation';
import { ItemsQ, QuranLevels } from '@/lib/quran';

const QuranLevelsTable = ({age,level}:{age:number,level:string}) => {
  let path = usePathname()
    const [selectedLevel, setSelectedLevel] = useState(level?level:'');
    // Function to handle radio button selection
    const handleLevelSelect = (level:string) => {
      setSelectedLevel(level);
    };
    const handleSubmit =  (event: FormEvent) => {
      event.preventDefault();
      selectedLevel.length>2&&
      SelectLevel(selectedLevel,path)
    };
  let surahs= ItemsQ
  let levels=QuranLevels
  return (
  <div>{level.length>1?
  <div>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead style={{ textAlign: 'start' }}>المستوى</TableHead>
          <TableHead style={{ textAlign: 'start' }}>السن</TableHead>
          <TableHead style={{ textAlign: 'start' }}>عدد الأجزاء</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
        <TableCell>
            <input
              type="radio"
              name="quranLevel"
            disabled={age < 20}
              value="الأول"
              checked={selectedLevel === "الأول"}
              onChange={() => handleLevelSelect("الأول")}
            />
          </TableCell>
          <TableCell>الأول</TableCell>
          <TableCell>لا يزيد عن 20 عاما</TableCell>
          <TableCell>القرءان الكريم كاملا مع إجادة أحكام التلاوة</TableCell>
        </TableRow>
        <TableRow>
        <TableCell>
            <input
              type="radio"
              name="quranLevel" disabled={age < 18}
              value="الثاني"
              checked={selectedLevel === "الثاني"}
              onChange={() => handleLevelSelect("الثاني")}
            />
          </TableCell>
          <TableCell>الثاني</TableCell>
          <TableCell>لا يزيد عن 18 عام</TableCell>
          <TableCell>ثلاثة أرباع القرءان الكريم مع إجادة أحكام التّلاوة</TableCell>
        </TableRow>
        <TableRow>
        <TableCell>
            <input
              type="radio"
              name="quranLevel" disabled={age < 15}
              value="الثالث"
              checked={selectedLevel === "الثالث"}
              onChange={() => handleLevelSelect("الثالث")}
            />
          </TableCell>
          <TableCell>الثالث</TableCell>
          <TableCell>لا يزيد عن 15 عامـا</TableCell>
          <TableCell>نصف القرءان الكريم مع إجادة أحكام التلاوة شفوي</TableCell>
        </TableRow>
        <TableRow>
        <TableCell>
            <input
              type="radio"
              name="quranLevel" disabled={age < 12}
              value="الرابع"
              checked={selectedLevel === "الرابع"}
              onChange={() => handleLevelSelect("الرابع")}
            />
          </TableCell>
          <TableCell>الرابع</TableCell>
          <TableCell>لا يزيد عن 12 عاما</TableCell>
          <TableCell>ربع القرءان الكريم</TableCell>
        </TableRow>
        <TableRow>
        <TableCell>
            <input
              type="radio"
              name="quranLevel" disabled={age < 10}
              value="الخامس"
              checked={selectedLevel === "الخامس"}
              onChange={() => handleLevelSelect("الخامس")}
            />
          </TableCell>
          <TableCell>الخامس</TableCell>
          <TableCell>لا يزيد عن 10 أعوام</TableCell>
          <TableCell>خمسة أجزاء</TableCell>
        </TableRow>
        <TableRow>
        <TableCell>
            <input
              type="radio"
              name="quranLevel" disabled={age < 8}
              value="السادس"
              checked={selectedLevel === "السادس"}
              onChange={() => handleLevelSelect("السادس")}
            />
          </TableCell>
          <TableCell>السادس</TableCell>
          <TableCell>لا يزيد عن 8 أعوام</TableCell>
          <TableCell>ثلاثة أجزاء</TableCell>
        </TableRow>
        <TableRow>
        <TableCell>
            <input
              type="radio"
              name="quranLevel" disabled={age < 6}
              value="السابع"
              checked={selectedLevel === "السابع"}
              onChange={() => handleLevelSelect("السابع")}
            />
          </TableCell>
          <TableCell>السابع</TableCell>
          <TableCell>لا يزيد عن 6 أعوام</TableCell>
          <TableCell>جزءان</TableCell>
        </TableRow>
        <TableRow>
        <TableCell>
            <input
              type="radio"
              name="quranLevel" disabled={age < 5}
              value="الثامن"
              checked={selectedLevel === "الثامن"}
              onChange={() => handleLevelSelect("الثامن")}
            />
          </TableCell>
          <TableCell>الثامن</TableCell>
          <TableCell>لا يزيد عن 5 أعوام</TableCell>
          <TableCell>جزء</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <Button onClick={handleSubmit} className='mt-3'>اختيار</Button>
    </div>:
  <div>

    <Table>
      <TableHeader>
        <TableRow>
          <TableHead style={{ textAlign: 'start' }}>اسم السورة</TableHead>
          <TableHead style={{ textAlign: 'start' }}>درجة الإجادة</TableHead>
          <TableHead style={{ textAlign: 'start' }}>ملاحظات</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {surahs.map((surah, index) => (
          
          <TableRow key={index}>

            <TableCell>{surah.name}</TableCell>
            <TableCell>{surah.id}</TableCell>
            <TableCell>{surah.id}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
    }
    </div>
  );
};

export default QuranLevelsTable;
