export default function Footer() {
  const date = new Date();
  return (
    <footer className="absolute w-full max-w-[1128px] mx-auto bottom-0">
      <div className="flex items-center justify-center min-h-[52px] border-t border-[rgb(140 140 140 / .25)]">
        <p>© {date.getFullYear()} ama. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
