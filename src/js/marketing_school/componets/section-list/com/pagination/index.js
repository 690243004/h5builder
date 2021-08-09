/*
 * 分页栏组件
 * @author XH
 */

// 导入样式表
import "./index.scss";
import { createBEM } from "../bem";

const bem = createBEM("kk-pagination");
// 定义props
const props = {
  // 当前页数
  current: {
    type: Number,
    default: 1,
  },
  // 总页数超过 n 页，则折叠多余的页码按钮
  pagerCount: {
    type: Number,
    default: 5,
  },
  // 数据总数
  total: {
    type: Number,
    default: 0,
  },
  // 每页条数
  size: {
    type: Number,
    default: 10,
  },
};

// 定义计算属性
const computed = {
  // 总页数
  pageCount() {
    return Math.ceil(this.total / this.size);
  },
  // 是否展示跳页(前进)按钮
  showNextSkip() {
    return this.current <= this.pageCount - this.pagerCount;
  },
  // 是否展示跳页(后腿)按钮
  showPreSkip() {
    return this.current > this.pagerCount;
  },
  // 页数平均值
  avg() {
    return Math.floor(this.pagerCount / 2);
  },
  max() {
    return this.avg + this.current;
  },
  min() {
    return this.current - this.avg;
  },
};

const methods = {
  handlePageClick(i) {
    if (this.current === i) return;
    this.$emit("pageChange", i);
  },
  handleNext() {
    if (this.current === this.pageCount) return;
    this.$emit("pageChange", this.current + 1);
  },
  handlePre() {
    if (this.current === 1) return;
    this.$emit("pageChange", this.current - 1);
  },

  handlePreSkip() {
    const index = this.current - this.size;
    this.$emit("pageChange", index > 0 ? index : 1);
  },
  handleNextSkip() {
    const index = this.current + this.size;
    this.$emit("pageChange", index <= this.pageCount ? index : this.pageCount);
  },

  handleLast() {
    this.$emit("pageChange", this.pageCount);
  },
  handleFirst() {
    this.$emit("pageChange", 1);
  },

  getPaginationBtn(h) {
    const pre = h("div", {
      class: [bem("btn"), bem("btn", "pre")],
      on: {
        click: this.handlePre,
      },
    });
    const next = h("div", {
      class: [bem("btn"), bem("btn", "next")],
      on: {
        click: this.handleNext,
      },
    });
    return [pre, next];
  },
  getPaginationNum(h) {
    const container = [
      h(
        "div",
        {
          class: [bem("th"), bem("th", { active: this.current === 1 })],
          on: {
            click: this.handlePageClick.bind(this, 1),
          },
        },
        1
      ),
      h(
        "div",
        {
          class: [bem("th"), bem("th", "skip")],
          directives: [
            {
              name: "show",
              value: this.showPreSkip,
            },
          ],
          on: {
            click: this.handlePreSkip,
          },
        },
        "..."
      ),
      h(
        "div",
        {
          class: [bem("th"), bem("th", "skip")],
          directives: [
            {
              name: "show",
              value: this.showNextSkip,
            },
          ],
          on: {
            click: this.handleNextSkip,
          },
        },
        "..."
      ),
      h(
        "div",
        {
          class: [
            bem("th"),
            bem("th", {
              active: this.current === this.pageCount,
            }),
          ],
          on: {
            click: this.handlePageClick.bind(this, this.pageCount),
          },
          directives: [
            {
              name: "show",
              value: this.pageCount > 1,
            },
          ],
        },
        this.pageCount
      ),
    ];
    const pages = [];
    for (let i = 2; i <= this.pageCount - 1; i++) {
      if (this.current < this.pagerCount) {
        // (1,pagerCount)
        if (i > this.pagerCount) continue;
      } else if (
        this.current >= this.pagerCount &&
        this.current <= this.pageCount - this.pagerCount
      ) {
        // [pagerCount,pageCount-pagerCount]
        if (i < this.min) continue;
        if (i > this.max) continue;
      } else {
        // (pageCount-pagerCount,pageCount]
        if (i < this.pageCount - this.pagerCount) continue;
      }

      pages.push(
        h(
          "div",
          {
            class: [
              bem("th"),
              bem("th", {
                active: this.current === i,
              }),
            ],
            on: {
              click: this.handlePageClick.bind(this, i),
            },
          },
          i
        )
      );
    }
    container.splice(2, 0, ...pages);
    return container;
  },
};

export default {
  name: "pagination",
  props,
  computed,
  methods,
  render(h) {
    const [preBtn, nextBtn, firstBtn, lastBtn] = this.getPaginationBtn(h);
    return h(
      "div",
      {
        class: bem(),
      },
      [firstBtn, preBtn, this.getPaginationNum(h), nextBtn, lastBtn]
    );
  },
};
