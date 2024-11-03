export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="mt-8 mb-4">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <hr className="border-t-2 border-gray-300 mt-2" />
    </div>
  );
}
