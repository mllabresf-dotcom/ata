import { Router } from "wouter";
import Header from '../Header';
import { ThemeProvider } from '../ThemeProvider';

export default function HeaderExample() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
      </Router>
    </ThemeProvider>
  );
}
