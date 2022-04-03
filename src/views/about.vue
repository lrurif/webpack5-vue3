<script>
import { ref } from "vue"
export default {
  setup() {
    const a = ref(0)
    const add = () => {
      a.value++;
    }
    return {
        a,
        add
    }
  },
  render() {
    return <div onClick={this.add}>数字：{this.a}</div>;
  },
};
</script>
