export default function CourseCard({ course }: { course: any }) {
  return (
    <div className="bg-white border-l-4 border-blue-600 shadow-sm rounded-r-lg p-4 mb-4 md:hidden">
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-blue-800">{course.level}</h3>
        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Gedung {course.gedung}</span>
      </div>
      <p className="text-sm text-gray-600 mb-2">{course.target}</p>
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div>
          <p className="font-semibold">Hari Materi:</p>
          <p>{course.materi}</p>
        </div>
        {course.hafalan && (
          <div>
            <p className="font-semibold">Hari Hafalan:</p>
            <p>{course.hafalan}</p>
          </div>
        )}
        <div>
          <p className="font-semibold">Jam:</p>
          <p>{course.jam}</p>
        </div>
        <div>
          <p className="font-semibold">Mulai:</p>
          <p>{course.mulai}</p>
        </div>
      </div>
    </div>
  );
}