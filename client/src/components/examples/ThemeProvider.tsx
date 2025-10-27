import { ThemeProvider } from '../ThemeProvider';

export default function ThemeProviderExample() {
  return (
    <ThemeProvider>
      <div className="p-8 bg-background text-foreground">
        <p>Theme Provider is working</p>
      </div>
    </ThemeProvider>
  );
}
