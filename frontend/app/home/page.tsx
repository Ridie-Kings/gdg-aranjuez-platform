'use client';
import { useProtectedRoute } from "@/hooks/useProtectedRoutes";


export default function Home() {
  const { isLoading } = useProtectedRoute(true);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <h1>TEST</h1>
    </div>
  );
}
