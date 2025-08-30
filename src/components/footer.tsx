export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto flex h-16 items-center justify-center px-4 md:px-6">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {currentYear} Mustefa Abrahim. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
