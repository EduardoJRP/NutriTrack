import { login, signup} from "./actions";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" formAction={login}>Log in</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded" formAction={signup}>Sign up</button>
      </form>
    </div>
  );
}
