import { asset } from '../site';

export default function Footer() {
  return (
    <footer className="border-t border-bravi-line bg-white/5 mt-12 py-10">
      <div className="max-w-screen-md mx-auto px-6 text-center flex flex-col items-center">
        <h2 className="mb-6">
          <img src={asset('logo-light.svg')} alt="브라비" className="h-7 w-auto mx-auto" />
        </h2>

        <div className="flex gap-6 mb-8">
          <a
            href="https://www.youtube.com/@bravi_official/shorts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bravi-ink/55 hover:text-bravi-deep transition-colors text-sm font-medium"
          >
            YouTube
          </a>
          <a
            href="https://moonda.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bravi-ink/55 hover:text-bravi-deep transition-colors text-sm font-medium"
          >
            브라비
          </a>
        </div>

        <p className="text-bravi-ink/45 text-xs leading-relaxed">
          © 2026 브라비. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
