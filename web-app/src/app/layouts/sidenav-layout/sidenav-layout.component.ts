import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout-sidenav',
  templateUrl: './sidenav-layout.component.html'
})
export class SidenavLayoutComponent implements OnInit {
  expandSidebar: Boolean = false;

  sidebarRoutes: Array<{
    name: String,
    icon?: String,
    childrens?: Array<{
      name: String,
      path: String
    }>
  }> = [{
    name: "dashboard",
    icon: "tachometer.png",
    childrens: [{
      name: "Home",
      path: "/home"
    }, {
      name: "User Searches",
      path: "/user-searches"
    }, {
      name: "Admin Searches",
      path: "/admin-searches"
    }]
  }, {
    name: "core",
    icon: "core.png",
    childrens: [{
      name: "Deep Search Setting",
      path: "/deep-search-setting"
    }, {
      name: "Project Tracker Setting",
      path: "/project-tracker-setting"
    }, {
      name: "CORE Health Checkup",
      path: "/admin-searches"
    }, {
      name: "Bulk Uploader",
      path: "/bulk-uploader"
    }, {
      name: "Well Management",
      path: "/well-management"
    }, {
      name: "All Documents",
      path: "/document"
    }]
  }, {
    name: "users",
    icon: "user.png",
    childrens: [{
      name: "All Users",
      path: "/all-users"
    }, {
      name: "Add New",
      path: "/add-new-user"
    }, {
      name: "Your profile",
      path: "/profile"
    }]
  }, {
    name: "Post",
    icon: "pin.png",
    childrens: [{
      name: "All Posts",
      path: "/all-posts"
    }, {
      name: "Add New",
      path: "/add-new-post"
    }, {
      name: "Categories",
      path: "/post-categories"
    }, {
      name: "tags",
      path: "/post-tags"
    }]
  }, {
    name: "Media",
    icon: "media.png",
    childrens: [{
      name: "Library",
      path: "/media-library"
    }, {
      name: "Add New",
      path: "/add-new-media"
    }]
  }, {
    name: "Pages",
    icon: "page.png",
    childrens: [{
      name: "All Pages",
      path: "/all-pages"
    }, {
      name: "Add New",
      path: "/add-new-page"
    }]
  }, {
    name: "Projects",
    icon: "project.png",
    childrens: [{
      name: "All Projects",
      path: "/all-projects"
    }, {
      name: "New Project",
      path: "/add-new-project"
    }, {
      name: "Projects Types",
      path: "/project-types"
    }, {
      name: "Calendar",
      path: "/project-calendar"
    }, {
      name: "Teams",
      path: "/project-teams"
    }, {
      name: "Dashboard",
      path: "/project-dashboard"
    }]
  }, {
    name: "Appearance",
    icon: "brush.png",
    childrens: [{
      name: "Widgets",
      path: "/appearance-widgets"
    }, {
      name: "Menus",
      path: "/appearance-menus"
    }]
  }, {
    name: "Plugins",
    icon: "plugin.png",
    childrens: [{
      name: "Install Plugin",
      path: "/install-plugin"
    }, {
      name: "Add New",
      path: "/add-new-plugin"
    }]
  }, {
    name: "Settings",
    icon: "gear.png",
    childrens: [{
      name: "General",
      path: "/setting-general"
    }, {
      name: "Visitor Counter Options",
      path: "/visitor-counter-options"
    }, {
      name: "Relivanssi Premium",
      path: "/relivanssi-premium"
    }]
  }];

  toggleNavbar() {
    this.expandSidebar = !this.expandSidebar;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
