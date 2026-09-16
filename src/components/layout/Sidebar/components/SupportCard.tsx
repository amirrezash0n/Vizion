export default function SupportCard() {
  return (
    <div className="flex flex-col gap-y-2 pb-4 text-center font-yekanHeavy lg:pb-8">
      <span className="text-xs lg:text-sm">نیاز به پشتیبانی دارید؟</span>
      <a
        href="tel:021338878"
        className="text-sm transition-colors hover:text-primary lg:text-base"
      >
        021-338878
      </a>
    </div>
  );
}
