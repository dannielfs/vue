<template>
	<v-app>

    <app-nav/>

    <app-toolbar/>

    <app-content/>

    <app-footer/>

	</v-app>
</template>

<script>

import Content from './Content';
import Nav from './Nav';
import ToolBar from './ToolBar';
import Footer from './Footer';

export default {
  components: {
    'app-content': Content,
    'app-nav': Nav,
    'app-toolbar': ToolBar,
    'app-footer': Footer
  }
}
</script>
