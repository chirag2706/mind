<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<Link className="navbar-brand" to="/">
  Mindspirint
</Link>

<div className="collapse navbar-collapse" id="navbarNavDropdown">
  <ul className="navbar-nav">
    <li className="nav-item active">
      <Link
        className="nav-link btn btn-outline-primary button"
        to = "/"
        // id="nav1"
      >
        Home <span className="sr-only">(current)</span>
      </Link>
    </li>
    <li className="nav-item active  ">
      <Link className="nav-link btn btn-outline-primary button" to = "/">
        Features
      </Link>
    </li>
    <li className="nav-item active">
      <Link
        className="nav-link btn btn-outline-primary button"
        to = "/"
        // id="nav1"
      >
        Pricing
      </Link>
    </li>
    <li className="nav-item dropdown active ">
      <Link
        className="nav-link  btn btn-outline-primary button  "
        href="#!"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        id=" navbarDropdownMenuLink "
      >
        <span className="dropdown-toggle">Dropdown link</span>
      </Link>
      <div
        className="dropdown-menu "
        aria-labelledby="navbarDropdownMenuLink"
      >
        <Link className="dropdown-item" to = "/login" id="nav1">
          Action
        </Link>
        <Link className="dropdown-item" to = "/" id="nav1">
          Another action
        </Link>
        <Link className="dropdown-item" to = "/" id="nav1">
          Something else here
        </Link>
      </div>
    </li>

    <li className="nav-item active  ">
      <Link className="nav-link btn btn-outline-primary button" to = "/signin">
        Register
      </Link>
    </li>
    <li className="nav-item dropdown active ">
      <Link
        className="nav-link  btn btn-outline-primary button  "
        href="#!"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        id=" navbarDropdownMenuLink "
      >
        <span className="dropdown-toggle">Login</span>
      </Link>
      <div
        className="dropdown-menu "
        aria-labelledby="navbarDropdownMenuLink"
      >
        <Link className="dropdown-item" to = "/login" id="nav1">
          Action
        </Link>
        <Link className="dropdown-item" to = "/" id="nav1">
          Another action
        </Link>
        <Link className="dropdown-item" to = "/" id="nav1">
          Something else here
        </Link>
      </div>
    </li>
  </ul>
</div>
</nav>