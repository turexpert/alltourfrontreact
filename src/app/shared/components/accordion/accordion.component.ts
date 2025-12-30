import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [],
  template: `<div class="accordion"><ng-content></ng-content></div>`,
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent implements AfterContentInit {
  @ContentChildren(AccordionItemComponent) tabs!: QueryList<AccordionItemComponent>;

  ngAfterContentInit() {
    this.tabs.forEach(tab => {
      tab.toggle.subscribe((isOpen) => {
        if (isOpen) {
          this.openTab(tab);
        }
      });
    });
  }

  openTab(selectedTab: AccordionItemComponent) {
    this.tabs.toArray().forEach(tab => {
      if (tab !== selectedTab && tab.isOpen) {
        tab.isOpen = false;
      }
    });
  }
}
