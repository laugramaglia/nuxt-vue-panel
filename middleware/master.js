export default function ({ $auth, redirect }) {
    if ($auth.user.type !== 'master') {
      return redirect('/')
    }
  }