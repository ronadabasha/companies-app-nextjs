export default function Footer() {
  const date = new Date();
  return (
    <footer className="fixed w-full mx-auto bottom-0 left-0 bg-white">
      <div className="flex items-center justify-center min-h-[52px] border-t border-[rgb(140 140 140 / .25)]">
        <p>© {date.getFullYear()} ama. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
